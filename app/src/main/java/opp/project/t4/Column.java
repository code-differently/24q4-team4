package opp.project.t4;

import java.util.ArrayList;
import opp.project.t4.exceptions.ColumnNotFoundException;

public class Column {

  public final String title;
  public final ArrayList<Task> tasksList;

  public Column(String title) {
    this.title = title;
    this.tasksList = new ArrayList<>();
  }

  public String getTitle() {
    return title;
  }

  public void addTask(Task task) {
    tasksList.add(task);
  }

  public void removeTask(Task task) throws ColumnNotFoundException {
    if (tasksList.isEmpty()) {
      throw new ColumnNotFoundException("Error no tasks found");
    }
    tasksList.remove(task);
  }

  public ArrayList<Task> getTasks() {
    return tasksList;
  }

  public double getProgressPercentage() {
    if (tasksList.isEmpty()) {
      return 0.0;
    }
    int completedTasks = 0;
    for (Task task : tasksList) {
      if (task.isCompleted()) {
        completedTasks++;
      }
    }
    return (completedTasks / (double) tasksList.size()) * 100;
  }

  @Override
  public String toString() {
    StringBuilder taskslistStr = new StringBuilder();
    for (Task task : tasksList) {
      taskslistStr.append(task.toString());
    }
    return "Column: " + title + "\n" + taskslistStr.toString();
  }
}
