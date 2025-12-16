async function test() {
    try {
        const res = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: [{ text: 'hello', sender: 'user' }] })
        });
        console.log('Status:', res.status);
        const text = await res.text();
        console.log('Body:', text.substring(0, 500));
    } catch (e) {
        console.error(e);
    }
}
test();
