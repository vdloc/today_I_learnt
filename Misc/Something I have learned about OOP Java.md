# Somethings I have learned about Java OOP

1. is -a relationship is the relation between an object and other types of it.

   Ex: 

   ``` java
   public class Animal () {
     public void breath() {
       return "breath";
     }
   }
   public class Human extends Animal () {
     public void think () {
       return "logic";
     }
   }
   ```

   so Human is - a Animal and Human class is inherited Animal fields and methods.

   has- a relationship is the relation between an object and the other objects which  it contains. Ex

   ```java
   public class Animal () {
     public void breath() {
       return "breath";
     }
   }
   public class straightSpine () {
     String spine = "straight";
   }
   public class Human extends Animal () {
     straightSpine spine = new straightSpine;
     public void think () {
       return "logic";
     }
   }
   ```

   so Human has -a straight spine object instance inside it.