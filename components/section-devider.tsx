"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 w-1 h-16 my-24 rounded hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.125 }}
    ></motion.div>
  );
}
