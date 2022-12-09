const SLEEP_TIME = 1000;

export const sleep = (msec: number = SLEEP_TIME): Promise<unknown> =>
  new Promise(resolve => {
    setTimeout(resolve, msec);
  });
