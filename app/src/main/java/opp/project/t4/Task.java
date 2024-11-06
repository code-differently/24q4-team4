package opp.project.t4;

import opp.project.t4.Interfaces.IAssignable;
import opp.project.t4.Interfaces.ICompletable;
import opp.project.t4.Interfaces.IPrioritizable;

public class Task implements IAssignable, ICompletable, IPrioritizable { 
    private String taskName; 
    private User assignee; // User assigned to this task
    private boolean completed;  // Task completion status
    private int priority;  // Task priority level
    private String currentColumn;  // Current column the task belongs to (for TaskBoard management)

    // Constructor to initialize task name, assignee, completed status, priority, and column
    public Task(String taskName, User assignee, boolean completed, int priority, String currentColumn) {
        this.taskName = taskName;
        this.assignee = assignee;
        this.completed = completed;
        this.priority = priority;
        this.currentColumn = currentColumn;
    }

    // Getter and Setter for taskName
    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    // Getter and Setter for completed status
    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    // Getter and Setter for priority
    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    // Getter and Setter for currentColumn
    public String getCurrentColumn() {
        return currentColumn;
    }

    public void setCurrentColumn(String currentColumn) {
        this.currentColumn = currentColumn;
    }

    // Method to display task details
    public void displayTaskDetails() {
        System.out.println("Task Name: " + taskName);
        System.out.println("Assigned To: " + (assignee != null ? assignee.getName() : "No assignee"));
        System.out.println("Completed: " + (completed ? "Yes" : "No"));
        System.out.println("Priority: " + priority);
        System.out.println("Current Column: " + currentColumn);
    }
}



    @Override
    public void assignUser(User user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'assignUser'");
    }
    @Override
    public void removeUser() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'removeUser'");
    }
    @Override
    public User getAssignee() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAssignee'");
    }

    @Override
    public void changePriority(int level) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changePriority'");
    }

    @Override
    public void markAsComplete() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'markAsComplete'");
    }

    @Override
    public void markAsIncomplete() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'markAsIncomplete'");
    }
    
}

