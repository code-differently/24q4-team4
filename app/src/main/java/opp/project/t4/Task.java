package opp.project.t4;

import java.util.UUID;

public class Task {
  private String title;
  private String description;
  private UUID id;
  // enum
  // private Priority priority;
  private Priority priority;

  // constructor method
  public Task(String title, String description, UUID id, Priority priority) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.priority = priority;
  }

  // getter and setter method
  public String getTitle() {
    return title;
  }

  public String getDescription() {
    return description;
  }

  public UUID getId() {
    return id;
  }

  public Priority getPriority() {
    return priority;
  }

  public void setPriority(Priority priority) {
    this.priority = priority;
  }

  @Override
  public String toString() {
    return "Task ID: "
        + id
        + "\n"
        + "Title: "
        + title
        + "\n"
        + "Description: "
        + description
        + "\n"
        + "Priority: "
        + priority
        + "\n";
  }
}
