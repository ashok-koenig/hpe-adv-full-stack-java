public class VirtualThreadDemo {
    public static void main(String[] args) throws InterruptedException {
        for (int i=1; i<= 10; i++){
            int id = i;
            Thread.startVirtualThread(()-> {
                System.out.println("Thread "+ id + " started");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println("Thread "+ id + " finished");
            });
        }

        Thread.sleep(2000);
    }
}
