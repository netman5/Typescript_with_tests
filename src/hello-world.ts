export function helloWorld(): string {
    return 'Hello world!';
}

export function greetings(name: string): string{
    return `Hi ${name}!`;
}

// Using a default value for the parameter
export function twoFer(name: string = 'you'): string {
    return `One for ${name}, one for me.`;
}