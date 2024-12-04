package opp.project.t4;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.UUID;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UserTaskManagerTest {
  /*
   *  I want to assign tasks to users
   *  Represent a user, with basic information (e.g., name, ID).
   */

  UserTaskManager userManager;
  User user;
  User user1;
  User user2;
  UUID id;
  Task task1;
  Task task2;
  Task task3;
  Task task4;

  @BeforeEach
  void setUp() {
    id = UUID.randomUUID();
    task1 = new Task("Complete lesson_17", null, id, null);
    task2 = new Task("Update Resume", null, id, null);
    task3 = new Task("Complete lesson_16", null, id, null);
    task4 = new Task("Create Resume", null, id, null);

    ArrayList<Task> taskList = new ArrayList<>();
    taskList.add(task1);
    taskList.add(task2);

    ArrayList<Task> taskList1 = new ArrayList<>();
    taskList1.add(task3);
    taskList1.add(task4);

    user = new User(id, "Chigazo Graham", taskList);
    user1 = new User(UUID.randomUUID(), "Austin Anude", taskList1); // Same ID as user1
    user2 = new User(UUID.randomUUID(), "John Doe", taskList);
    ArrayList<User> users = new ArrayList<>();
    users.add(user);
    users.add(user1);
    users.add(user2);
    userManager = new UserTaskManager(users);
  }

  @Test
  public void testAssignMultipleTasks() {
    // Arrange
    ArrayList<Task> taskList1 = new ArrayList<>();
    taskList1.add(task1);
    taskList1.add(task2);
    taskList1.add(task3);
    taskList1.add(task4);

    ArrayList<Task> expectedTaskList = new ArrayList<>();
    expectedTaskList.add(task1);
    expectedTaskList.add(task2);
    expectedTaskList.add(task3);
    expectedTaskList.add(task4);
    // Act

    // Assert
    assertEquals(expectedTaskList, taskList1);
  }

  @Test
  public void testAssignTask() {
    User user250000 = new User(id, "Chigazo Please Look up object equality", new ArrayList<>());

    ArrayList<User> usersList = new ArrayList<>(Arrays.asList(user250000));
    UserTaskManager userManager2 = new UserTaskManager(usersList);
    // Arrange
    ArrayList<Task> expectedTask = new ArrayList<Task>();
    expectedTask.add(task1);

    // Act
    userManager2.assignTask(user250000, task1);
    // Assert
    assertEquals(expectedTask, user250000.getTaskList());
  }

  @Test
  public void testAssignTaskToMultipleUsers() {
    // Arrange
    Task task = new Task("Complete lesson_16", null, null, null);
    ArrayList<User> users = new ArrayList<>();
    users.add(user);
    users.add(user2);
    // Act
    userManager.assignTaskToMultipleUsers(task, users);
    // Assert
    assertTrue(user.getTaskList().contains(task));
    assertTrue(user2.getTaskList().contains(task));
  }

  @Test
  public void testRemoveTask() {
    // Arrange
    Task task = new Task("Complete lesson_16", null, null, null);
    userManager.assignTask(user, task);
    // Act
    userManager.removeTask(user, task);
    // Assert
    assertFalse(user.getTaskList().contains(task));
  }

  @Test
  public void testRemoveAllTasks() {
    // Arrange
    ArrayList<Task> taskList = new ArrayList<>();
    taskList.add(new Task("Complete lesson_17", null, null, null));
    taskList.add(new Task("Update Resume", null, null, null));
    // Act
    userManager.removeAllTasks(user);
    // Assert
    assertTrue(user.getTaskList().isEmpty());
  }

  @Test
  public void testRemoveTaskFromMultipleUsers() {
    // Arrange
    Task task = new Task("Complete lesson_17", null, null, null);
    ArrayList<User> users = new ArrayList<>();
    users.add(user);
    users.add(user2);
    // Act
    userManager.removeTaskFromMultipleUsers(task, users);
    // Assert
    assertFalse(user.getTaskList().contains(task));
    assertFalse(user2.getTaskList().contains(task));
  }

  @Test
  public void testFindUsersWithTask() {
    // Arrange

    ArrayList<User> expectedUsers = new ArrayList<>();
    expectedUsers.add(user);
    expectedUsers.add(user2);

    // Assert
    assertEquals(expectedUsers, userManager.findUsersWithTask(task1));
  }
}
