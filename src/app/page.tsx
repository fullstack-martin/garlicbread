"use client";
import { readAPIKeycookie, saveAPIKeycookie } from "@/lib/cookie";
import { cypher, decipher } from "@/lib/crypto";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

saveAPIKeycookie(cypher("siuuu"));

const Page: React.FC = () => {
  const [apikey, setApikey] = useState<string>("");

  useEffect(() => {
    setApikey(decipher(readAPIKeycookie()!));
  }, []);

  return <Box>{` apikey: ${apikey} `}</Box>;
};

export default Page;
