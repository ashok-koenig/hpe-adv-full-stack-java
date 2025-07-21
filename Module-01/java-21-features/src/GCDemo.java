public class GCDemo {
    static class User {
        String name;
        User(String name){
            this.name = name;
        }
    }
    static void printUser(User user){
        String localMessage = "User name is "+ user.name; // 'localMessage' in Stack
        System.out.println(localMessage);
    }

    public static void main(String[] args) {
        int a = 10; // Stored in Stack
        User user = new User("John"); // 'user' ref in Stack, Object in Heap
        printUser(user);
    }
}
