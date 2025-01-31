```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanup, setShouldCleanup] = useState(true);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count);
    return () => {
      if (shouldCleanup) {
        // Cleanup function (optional)
        console.log('Cleanup');
      }
    };
  }, [count, shouldCleanup]); // Only re-run effect if 'count' or 'shouldCleanup' changes

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleUnmount = () => {
    setShouldCleanup(false);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleUnmount}>Unmount</button> 
    </div>
  );
}

export default MyComponent;
```