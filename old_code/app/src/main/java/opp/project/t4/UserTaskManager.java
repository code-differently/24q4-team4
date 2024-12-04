package opp.project.t4;

import java.util.ArrayList;

public class UserTaskManager {

  private ArrayList<User> users;

  public UserTaskManager(ArrayList<User> users) {
    this.users = users;
  }

  public void assignMultipleTasks(User user, ArrayList<Task> tasks) {
    user.getTaskList().addAll(tasks);
  }

  public void assignTask(User user, Task task) {
    user.getTaskList().add(task);
  }

  public void assignTaskToMultipleUsers(Task task, ArrayList<User> users) {
    for (User user : users) {
      if (user != null) {
        assignTask(user, task);
      }
    }
  }

  public void removeTask(User user, Task task) {
    user.getTaskList().remove(task);
  }

  public void removeAllTasks(User user) {
    user.getTaskList().clear();
  }

  public void removeTaskFromMultipleUsers(Task task, ArrayList<User> users) {
    for (User user : users) {
      if (user != null) {
        removeTask(user, task);
      }
    }
  }

  public ArrayList<User> findUsersWithTask(Task task) {
    ArrayList<User> usersWithTask = new ArrayList<User>();
    for (User user : users)
      if (user.getTaskList().contains(task)) {
        usersWithTask.add(user);
      }
    return usersWithTask;
  }
}
