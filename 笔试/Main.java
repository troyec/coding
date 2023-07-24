import java.lang.reflect.Array;
import java.util.Scanner;
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int n = scanner.nextInt();
    int m = scanner.nextInt();
    int[] a = new int[n];
    for (int i = 0; i < n; i++) {
      a[i] = scanner.nextInt();
    }
    int[] dp = new int[n + 1];
    Arrays.fill(dp, Integer.MAX_VALUE);
    dp[0] = 0;
    for (int i = 0; i < n; i++) {
      int maxVol = 0;
      int minVol = Integer.MAX_VALUE;
      for (int j = i; j > 0 && i - j + 1 <= m; j--) {
        maxVol = Math.max(maxVol, a[j - 1]);
        minVol = Math.min(minVol, a[j - 1]);
        int cost = (i - j + 1) * Math.floor((maxVol + minVol) / 2 + s);
        dp[i] = Math.min(dp[i], dp[j - 1] + cost);
      }
    }

  }
}