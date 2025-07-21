public class PatternMatchingDemo {
    static void printLength(Object obj){
        switch (obj){
            case String s -> System.out.println("String Length: "+ s.length());
            case Integer i -> System.out.println("Integer value:" + i);
            case null -> System.out.println("Null object");
            default -> System.out.println("Unknown type");
        }
    }
    public static void main(String[] args) {
        Object obj = "Hello";
//        System.out.println(obj.length());
        if(obj instanceof String s){
            System.out.println("String Length: "+ s.length());
        }
        printLength("John");
        printLength(100);
        printLength(obj);
    }
}
