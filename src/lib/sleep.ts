const SLEEP_TIME = 1000;

export function sleep(msec: number = SLEEP_TIME): Promise<unknown> {
  return new Promise(resolve => {
    setTimeout(resolve, msec);
  });
}
