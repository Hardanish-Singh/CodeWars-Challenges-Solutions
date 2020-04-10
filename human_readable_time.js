/******************************************************************************************
 *                        CODEWARS HUMAN READABLE TIME CHALLENGE                          *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Write a function, which takes a non-negative integer (seconds) as input & returns the  *
 * time in a human-readable format (HH:MM:SS)                                             *
 *                                                                                        *
 * HH = hours, padded to 2 digits, range: 00 - 99                                         *
 * MM = minutes, padded to 2 digits, range: 00 - 59                                       *
 * SS = seconds, padded to 2 digits, range: 00 - 59                                       *
 *                                                                                        *
 * The maximum time never exceeds 359999 (99:59:59)                                       *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: 0                                                                             *
 * Output 1: 00:00:00                                                                     *
 *                                                                                        *
 * Input 2: 60                                                                            *
 * Output 2: 00:01:00                                                                     *
 *                                                                                        *
 * Input 3: 86399                                                                         *
 * Output 3: 23:59:59                                                                     *
 *****************************************************************************************/

function formatTimeStamp(hours, minutes, second) {
  let hoursTimeStamp;
  let minutesTimeStamp;
  let secondsTimeStamp;

  hoursTimeStamp = hours > 9 ? "" + hours : "0" + hours;
  minutesTimeStamp = minutes > 9 ? "" + minutes : "0" + minutes;
  secondsTimeStamp = second > 9 ? "" + second : "0" + second;

  return [hoursTimeStamp, minutesTimeStamp, secondsTimeStamp];
}

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  let second = seconds % 60;
  const [HH, MM, SS] = formatTimeStamp(hours, minutes, second);
  return HH + ":" + MM + ":" + SS;
}
