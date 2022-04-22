/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。
 *
 *
 *
 * 示例1:
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 示例 2:
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 示例 3:
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是"wke"，所以其长度为 3。
 *     请注意，你的答案必须是 子串 的长度，"pwke"是一个子序列，不是子串。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param s
 */
export default function lengthOfLongestSubstring(s) {
  let arr = [];
  let max = 0;

  // 遍历字符串
  for (let i = 0; i < s.length; i += 1) {
    if (arr.includes(s[i])) {
      arr = arr.slice(arr.findIndex((val) => val === s[i]) + 1);
    }
    arr = [...arr, s[i]];

    max = arr.length > max ? arr.length : max;
  }

  // 扩展成数组再遍历
  // [...s].forEach((item) => {
  //   if (arr.includes(item)) {
  //     arr = arr.slice(arr.findIndex((val) => val === item) + 1);
  //   }
  //   arr = [...arr, item];
  //   max = arr.length > max ? arr.length : max;
  // });

  return max;
}
