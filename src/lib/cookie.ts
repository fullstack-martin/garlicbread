import cookie from "js-cookie";

export function saveAPIKeycookie(apikey: string) {
  return cookie.set("apikey", apikey);
}

export function readAPIKeycookie(){
  return cookie.get("apikey")
}