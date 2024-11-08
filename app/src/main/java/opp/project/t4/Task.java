package opp.project.t4;

import java.util.List;
import opp.project.t4.exceptions.TaskNotFoundException;
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

  public static Task findTaskById(List<Task> tasks, String id) throws TaskNotFoundException {
    for (Task task : tasks) {
      if (task.getId().equals(id)) {
        return task;
      }
    }
    throw new TaskNotFoundException("Task with ID " + id + " not found.");
  }
}
