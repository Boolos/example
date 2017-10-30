export class Hello {
    greet(name: string): string {
        return `Hi, ${name}!`;
    }
}

console.log(new Hello().greet('The Dude'));