import { auth } from "@/auth";
import { cache } from "react";

export default cache(auth);


/**
 * this is used to de dupe auth requests for sessions
 * when the page is refreshed the cache is busted
 */