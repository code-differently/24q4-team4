// package opp.project.t4;

// import org.junit.jupiter.api.Test;
// import static org.junit.jupiter.api.Assertions.*;

// import java.util.ArrayList;
// import java.util.UUID;

// import org.junit.jupiter.api.BeforeEach;

// class UserTaskManagerTest {
//     /*
//      *  I want to assign tasks to users
//      *  Represent a user, with basic information (e.g., name, ID).
//      */

//     UserTaskManager userManager;
//     User user;
//     User user1;
//     User user2;

//     @BeforeEach
//     void setUp() {
//         UUID id = UUID.randomUUID();

//         ArrayList<Task> taskList = new ArrayList<>();
//         taskList.add(new Task("Complete lesson_17", null, null, null));
//         taskList.add(new Task("Update Resume", null, null, null));

//         ArrayList<Task> taskList1 = new ArrayList<>();
//         taskList1.add(new Task("Complete lesson_16", null, null, null));
//         taskList1.add(new Task("Create Resume", null, null, null));

//         user = new User(id, "Chigazo Graham", taskList);
//         user1 = new User(UUID.randomUUID(), "Austin Anude", taskList1);  // Same ID as user1
//         user2 = new User(UUID.randomUUID(), "John Doe", taskList);
//     }

//     @Test
//     public void testAssignMultipleTasks() {
//         //Arrange
//         ArrayList<Task> taskList1 = new ArrayList<>();
//         taskList1.add(new Task("Complete lesson_16", null, null, null));
//         taskList1.add(new Task("Create Resume", null, null, null));
//         ArrayList<Task> expectedTaskList = new ArrayList<>();
//         expectedTaskList.add(new Task("Complete lesson_17", null, null, null));
//         expectedTaskList.add(new Task("Update Resume", null, null, null));
//         expectedTaskList.add(new Task("Complete lesson_16", null, null, null));
//         expectedTaskList.add(new Task("Create Resume", null, null, null));

//         //Act
//         userManager.assignMultipleTasks(user, taskList1);
//         //Assert
//         assertEquals(expectedTaskList, user.getTaskList());
//     }

//     @Test
//     public void testAssignTask() {
//         //Arrange
//         ArrayList<Task> expectedTask = new ArrayList<Task>();
//         Task task = new Task("Complete lesson_16", null, null, null);
//         expectedTask.add(new Task("Complete lesson_17", null, null, null));
//         expectedTask.add(new Task("Update Resume", null, null, null));
//         expectedTask.add(task);
//         //Act
//         userManager.assignTask(user, task);
//         //Assert
//         assertEquals(expectedTask, user.getTaskList());
//     }

//     @Test
//     public void testAssignTaskToMultipleUsers() {
//         //Arrange
//         Task task = new Task("Complete lesson_16", null, null, null);
//         ArrayList<User> users = new ArrayList<>();
//         users.add(user);
//         users.add(user2);
//         //Act
//         userManager.assignTaskToMultipleUsers(task, users);
//         //Assert
//         assertTrue(user.getTaskList().contains(task));
//         assertTrue(user2.getTaskList().contains(task));
//     }

//     @Test
//     public void testRemoveTask() {
//         //Arrange
//         Task task = new Task("Complete lesson_16", null, null, null);
//         userManager.assignTask(user, task);
//         //Act
//         userManager.removeTask(user, task);
//         //Assert
//         assertFalse(user.getTaskList().contains(task));
//     }

//     @Test
//     public void testRemoveAllTasks() {
//         // Arrange
//         ArrayList<Task> taskList = new ArrayList<>();
//         taskList.add(new Task("Complete lesson_17", null, null, null));
//         taskList.add(new Task("Update Resume", null, null, null));
//         // Act
//         userManager.removeAllTasks(user, taskList);
//         // Assert
//         assertTrue(user.getTaskList().isEmpty());
//     }

//     @Test
//     public void testRemoveTaskFromMultipleUsers() {
//         //Arrange
//         Task task = new Task("Complete lesson_17", null, null, null);
//         ArrayList<User> users = new ArrayList<>();
//         users.add(user);
//         users.add(user2);
//         // Act
//         userManager.removeTaskFromMultipleUsers(task, users);
//         // Assert
//         assertFalse(user.getTaskList().contains(task));
//         assertFalse(user2.getTaskList().contains(task));
//     }

//     @Test
//     public void testFindUsersWithTask() {
//         // Arrange
//         Task task = new Task("Complete lesson_17", null, null, null);

//         ArrayList<User> expectedUsers = new ArrayList<>();
//         expectedUsers.add(user);
//         expectedUsers.add(user2);
//         // Act
//         userManager.findUsersWithTask(task);

//         // Assert
//         assertEquals(expectedUsers, userManager.findUsersWithTask(task));
//     }
// }
