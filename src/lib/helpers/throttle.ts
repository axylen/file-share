function throttle<T extends any[], U>(func: (...args: T) => U, ms = 100) {
  let isThrottled = false;
  let timeout: ReturnType<typeof setTimeout>;
  let savedArgs: T | null;

  const throttle = (...args: T) => {
    savedArgs = args;

    if (isThrottled) return;

    func(...savedArgs);
    savedArgs = null;
    isThrottled = true;

    timeout = setTimeout(() => {
      isThrottled = false;
      if (savedArgs) throttle(...savedArgs);
    }, ms);

    setTimeout(() => {}, 100);
  };

  throttle.stop = () => clearTimeout(timeout);
  return throttle;
}

export default throttle;
