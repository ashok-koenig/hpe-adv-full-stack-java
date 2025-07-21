import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SteamDemo {
    public static void main(String[] args) {
        System.out.println("Stream from values");
        Stream<Integer> stream1 = Stream.of(10, 20, 3, 40, 5);
//        stream1.sorted().forEach((value) -> System.out.println(value));
        stream1.sorted().forEach(System.out::println);

        System.out.println("Stream from Array");
        String[] names = {"John", "Smith", "Peter", "Bob"};
        Stream<String> stream2 = Arrays.stream(names);
        stream2.filter((name) -> name.startsWith("P")).forEach(System.out::println);

        System.out.println("Stream from Collections");
        List<String> courses = Arrays.asList("html", "css", "core java", "javascript");
        Stream<String> stream3 = courses.stream();
//        stream3.map((c) -> c.toUpperCase()).forEach(System.out::println);
        List<String> updateCourses = stream3.map((c) -> c.toUpperCase()).collect(Collectors.toList());
        System.out.println(updateCourses);
     }
}
