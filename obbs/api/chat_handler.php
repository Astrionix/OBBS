<?php
header('Content-Type: application/json');

// --- CONFIGURATION ---
// 1. Get your API Key from: https://aistudio.google.com/app/apikey (for Gemini)
// 2. Paste it below.
$API_KEY = "YOUR_GEMINI_API_KEY_HERE"; 

// API URL for Gemini 1.5 Flash (Fast & Efficient)
$API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" . $API_KEY;

// Get the raw POST data
$inputData = json_decode(file_get_contents('php://input'), true);
$userMessage = $inputData['message'] ?? '';

if (empty($userMessage)) {
    echo json_encode(['reply' => 'Please say something!']);
    exit;
}

// Prepare the payload for Gemini
$data = [
    "contents" => [
        [
            "parts" => [
                ["text" => "You are a helpful assistant for Uthsav, a Banquet Booking System. Answer queries about weddings, birthdays, corporate events, and catering. Keep answers concise (under 50 words). User says: " . $userMessage]
            ]
        ]
    ]
];

// Initialize cURL
$ch = curl_init($API_URL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// Execute request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    echo json_encode(['reply' => 'Error connecting to AI service.']);
} else {
    $responseData = json_decode($response, true);
    
    // Extract text from Gemini response structure
    if (isset($responseData['candidates'][0]['content']['parts'][0]['text'])) {
        $reply = $responseData['candidates'][0]['content']['parts'][0]['text'];
        echo json_encode(['reply' => $reply]);
    } else {
        // Fallback or error logging
        echo json_encode(['reply' => 'I am having trouble thinking right now. Please try again later.']);
    }
}

curl_close($ch);
?>
