package opp.project.t4;

import java.util.Objects;

import java.util.List;
import java.util.UUID;
import opp.project.t4.Interfaces.ICompletable;
import opp.project.t4.exceptions.TaskNotFoundException;

public class Task implements ICompletable {
  private String title;
  private String description;
  private UUID id;
  // enum
  // private Priority priority;
  private Priority priority;
  private boolean completed;

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

  public static Task findTaskById(List<Task> tasks, String id) throws TaskNotFoundException {
    for (Task task : tasks) {
      if (task.getId().equals(id)) {
        return task;
      }
    }
    throw new TaskNotFoundException("Task with ID " + id + " not found.");
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
  public void markAsComplete() {
    this.completed = true;
  }

  @Override
  public void markAsIncomplete() {
    this.completed = false;
  }

  @Override
  public boolean isCompleted() {
    return completed;
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
