package opp.project.t4;

import java.util.ArrayList;

public class Column {

  public final String title;
  public final ArrayList<Task> taskslist;

  public Column(String title) {
    this.title = title;
    this.taskslist = new ArrayList<>();
  }

  public String getTitle() {
    return title;
  }

  public void addTask(Task task) {
    taskslist.add(task);
  }

  public void removeTask(Task task) {
    taskslist.remove(task);
  }

  public ArrayList<Task> getTasks() {
    return taskslist;
  }

  @Override
  public String toString() {
    StringBuilder taskslistStr = new StringBuilder();
    for (Task task : taskslist) {
      taskslistStr.append(task.toString()).append("\n");
    }
    return "Column: " + title + "\n" + taskslistStr.toString();
  }
}
