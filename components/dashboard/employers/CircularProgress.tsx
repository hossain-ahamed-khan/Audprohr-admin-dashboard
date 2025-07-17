"use client";

import { useEffect, useState } from "react";

interface CircularProgressProps {
    value: number; // from 0 to 100
    size?: number; // px
    strokeWidth?: number;
    color?: string;
}

export function CircularProgress({
    value,
    size = 50,
    strokeWidth = 8,
    color = "#4B2A99", // your primary color
}: CircularProgressProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
        >
            <svg
                className="transform -rotate-90"
                width={size}
                height={size}
            >
                <circle
                    className="text-gray-200"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className="transition-all duration-500"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>
            <span className="absolute text-sm font-semibold text-gray-800 dark:text-white">
                {value}%
            </span>
        </div>
    );
}
