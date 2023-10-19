

export async function conversationApi(options, abortSignal) {
    const response = await fetch("http://localhost:5000/api/chatbot/getResponse", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "api-key":'e951b48da7c548e18af601a15cb6aefa'
        },
        body: JSON.stringify({
            messages: options.messages
        }),
        signal: abortSignal
    });
console.log(response)
    return response;
}

export async function getUserInfo() {
    const response = await fetch('/.auth/me');
    if (!response.ok) {
        console.log("No identity provider found. Access to chat will be blocked.")
        return [];
    }

    const payload = await response.json();
    return payload;
}