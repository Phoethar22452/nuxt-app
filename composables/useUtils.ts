export const useUtils = () => {
    const sayGreetingToName = (name:string) => { console.log(`Greeting sir ${name}`) };
    return {
        sayGreetingToName
    }
}