"use client";

import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [result, setResult] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        setResult(JSON.stringify(data, null, 2));
    }

    return (
        <div style={{ padding: 40 }}>
            <h1>Prisma Login Test</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Call Login API</button>
            </form>

            <pre>{result}</pre>
        </div>
    );
}
