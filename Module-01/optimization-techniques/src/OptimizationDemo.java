import java.util.ArrayList;
import java.util.List;

public class OptimizationDemo {
    private static List<byte[]> cache = new ArrayList<>();
    public static void main(String[] args) {
        // Unoptimized
        String s1 = new String("Hello");
        // Optimized
        String s2 = "Welcome";
        // Memory Leak
        for(int i =0;i<10;i++){
            cache.add(new byte[1024 * 1024 * 10]);
            System.out.println("Added chunk:" + i);
        }

        // Fix is to release unused references
        cache.clear();
        // Request GC
        System.gc();
        System.out.println("Cache cleared");
    }
}
