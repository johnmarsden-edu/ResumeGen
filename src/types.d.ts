declare module "*.hbs" {
    const template: (...args: object[]) => string;

    export default template;
}

declare module "*.css" {
    const content: string;
    export default content;
}

declare module "resume-schema" {
    export const schema: object;
}