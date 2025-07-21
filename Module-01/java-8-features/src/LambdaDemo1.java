@FunctionalInterface
interface SimpleInterface{
    void display();
    default void defaultMethod(){
        System.out.println("This is default method inside interface");
    }
}

public class LambdaDemo1 implements SimpleInterface{
    public static void main(String[] args) {
        LambdaDemo1 obj = new LambdaDemo1();
        obj.display();
        obj.defaultMethod();

        SimpleInterface demoObject = () ->
                System.out.println("Welcome to Lambda Expression");

        demoObject.display();

        SimpleInterface anotherObject = () ->
                System.out.println("Another implementation of functional interface method");

        anotherObject.display();
    }

    @Override
    public void display() {
        System.out.println("Direct implementation of interface");
    }
}
