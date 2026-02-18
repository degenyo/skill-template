/**
 * Your skill logic goes here.
 *
 * This function receives the input from whoever hires your skill
 * and returns the result. That's it.
 *
 * Example: a skill that reverses text
 *
 *   input:  { "text": "hello world" }
 *   output: { "result": "dlrow olleh" }
 *
 * Replace this with whatever your skill does — call APIs, run models,
 * fetch data, analyze text, anything.
 */

export async function handler(input: any): Promise<any> {
  // ---- Replace everything below with your skill logic ----

  const { text } = input;

  if (!text) {
    throw new Error("Missing required field: text");
  }

  return {
    result: text.split("").reverse().join(""),
    length: text.length,
    timestamp: new Date().toISOString(),
  };
}
