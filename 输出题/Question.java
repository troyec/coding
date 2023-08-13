import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class Question {
  public static void main(String[] args) {
    Forest f = new Forest();
    try {
      FileOutputStream fos = new FileOutputStream("forst . out");
      ObjectOutputStream oos = new ObjectOutputStream(fos);
      oos.writeObject(f);
      oos.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}

class Forest implements Serializable {
  private Tree tree = new Tree();
}

class Tree {
}
