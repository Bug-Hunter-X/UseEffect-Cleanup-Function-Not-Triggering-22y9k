# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function does not behave as expected.  The provided code example includes a counter component that uses `useEffect` to log the current count and a cleanup message. The issue is that the cleanup message isn't always logged when expected, leading to potential memory leaks or unexpected behavior.

## Problem

The primary problem lies in the understanding and proper implementation of the cleanup function within `useEffect`.  Improper usage can prevent crucial cleanup tasks from being performed when the component unmounts or updates, leading to unforeseen issues. This can cause issues with memory management, event listeners, or other resources that need explicit release.

## Solution

The solution involves reviewing how dependencies are handled in the useEffect hook to ensure that the cleanup function is called correctly under the right circumstances. The dependencies array is crucial here.  Incorrect dependency handling will prevent the cleanup from firing when needed. Additionally, it's important to understand that the cleanup function within `useEffect` always executes before the next effect runs (or before the component unmounts).