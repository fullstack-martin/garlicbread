import CryptoJS from "crypto-js";

const key = process.env["SERVER_KEY"]!;
export function cypher(message: string) {
  return CryptoJS.AES.encrypt(message, key).toString();
}

export function decipher(ciphertext: string) {
  return CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
}
