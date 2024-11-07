package opp.project.t4;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class User{

    private final UUID id;
    private String name;
    public ArrayList<Task> taskList;
    public User user;

    public User(UUID id, String name, ArrayList<Task> taskList){
        if (id == null || name == null || taskList == null) {
            throw new IllegalArgumentException("Arguments cannot be null");
        }
        this.id = id;
        this.name = name;
        this.taskList = new ArrayList<>(taskList);
    }

    public UUID getId(){
        return id;
    }
    
    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public ArrayList<Task> getTaskList() {
        return new ArrayList<>(taskList);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        User user = (User) obj;
        return id.equals(user.id);
    }
    
    @Override
    public int hashCode() {
        return id.hashCode();
    }
    
    @Override
    public String toString() {
        return "User{" + "id=" + id + ", name='" + name + '\'' + ", taskList=" + taskList + '}';
    }
