package opp.project.t4;

import java.util.Objects;

public class Task {
  private String title;
  private String description;
  private String id;
  // enum
  // private Priority priority;
  private String priority;

  // constructor method
  public Task(String title, String description, String id, String priority) {
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

  public String getId() {
    return id;
  }

  public String getPriority() {
    return priority;
  }

  public void setPriority(String priority) {
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

  @Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Task task = (Task) o;
    return title.equals(task.title) && description.equals(task.description) && id.equals(task.id) && priority.equals(task.priority);
}

@Override
public int hashCode() {
    return Objects.hash(title, description, id, priority);
}
}
