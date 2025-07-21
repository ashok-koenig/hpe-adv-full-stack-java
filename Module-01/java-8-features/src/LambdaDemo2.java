@FunctionalInterface
interface Welcome {
    void greet(String name);
}
public class LambdaDemo2 {
    public static void main(String[] args) {
        Welcome person = (name) -> System.out.println("Welcome "+ name);
        person.greet("John");
    }
}
