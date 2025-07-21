interface MathOperation {
    int operate(int a, int b);
}
public class FunctionalInterfaceDemo {
    public static void main(String[] args) {
        MathOperation addition = (x, y) -> x + y;
        MathOperation multiplication = (x, y) -> x * y;

        System.out.println("Sum: "+ addition.operate(5, 7));
        System.out.println("Product: "+ multiplication.operate(6 , 8));
    }
}
