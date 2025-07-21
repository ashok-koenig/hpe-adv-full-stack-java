record Person(String name, int age){}
public class RecordDemo {
    public static void main(String[] args) {
        Person p = new Person("John", 30);
        System.out.println(p.name());
        System.out.println(p.age());
        System.out.println(p);
    }
}
