

public class JavaCheatSheet {
    //Variables
    int age = 26;
    String name = "Emre";
    float average = 3.11f;
    double accuracy = 5.7;
    bool isTrue = true;
    Array myArray = new Array();
    ArrayList myArrayList = new ArrayList();
    HashSet<String> myHashSet = new HashSet<String>();
    HashMap<String, Integer> myHashMap = new HashMap<String, Integer>();

    //Loops
    // For Loop

    int[] myNumbers = {1, 2, 3, 4};
    for (int i = 0; i<myNumbers.length; i++){
        int x = myNumbers[i];
        System.out.println(x);
    }

    // For Loop in an Array

    for(int counter : myNumbers){
        System.out.println(counter);
    }

    // While Loop

    int counnter = 0;
    int terminationCount = 10;
    while(counter < terminationCount){
        System.out.println(counter);
        counter++;
    }

    /*
    Operators 

    && and
    || or
    >  greater than
    <  less than
    >= equal or greater than
    <= equal or less than
    != not equal
    %  Modulus
    ++ Increment
    -- Decrement
    
    */

    // Conditions
    // If-Else
    int number = 5;
    if(number > 10){
        System.out.println("Number is greater than 10 ");
    }
    else if(number < 10){
        System.out.println("Number is less than 10 ");
    }
    else{
        System.out.println("Number is equal to 10");
    }

    // Switch case

    int day = 2;
    switch (day) {
        case 1:
            System.out.println("Monday");
            break;
        case 2:
            System.out.println("Tuesday");
            break;
        default:
            System.out.println("Other day");
            break;
    }
}


// Class
public class Employee{
    private String name;
    private int salary;
    private int experience;
    
    // Constructor
    public Employee(String name, int salary, int experience){
        this.name = name;
        this.salary = salary;
        this.experience = experience;
        System.out.println("Constructor called...");
    }
    // Accessor
    public String getName(){
        return this.name;
    }
    // Mutator
    public void setName(String name){
        this.name = name;
    }
    // Facilitator
    public void increaseSalary(int amount){
        this.salary = this.salary + amount;
    }
    // Enquiry
    public bool isExperienced(){
        return (this.experience > 3) ? true : false;
    }

    
}