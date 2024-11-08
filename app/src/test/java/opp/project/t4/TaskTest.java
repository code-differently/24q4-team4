package opp.project.t4;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import opp.project.t4.exceptions.TaskNotFoundException;
import org.junit.jupiter.api.Test;

class TaskTest {
  Priority priority;

  UUID id = UUID.randomUUID();

  @Test
  public void testGetTitle() {
    // Initialize a Task object with sample data
    Task task = new Task("Sample Title", "Sample Description", id, Priority.HIGH);
    // Test the getTitle method
    assertEquals("Sample Title", task.getTitle(), "Title should be 'Sample Title'");
  }

  @Test
  public void testGetDescription() {
    // Initialize a Task object with sample data
    Task task = new Task("Sample Title", "Sample Description", id, Priority.HIGH);
    // Test the getDescription method
    assertEquals(
        "Sample Description", task.getDescription(), "Description should be 'Sample Description'");
  }

  @Test
  public void testGetId() {
    // Initialize a Task object with sample data
    Task task = new Task("Sample Title", "Sample Description", id, Priority.HIGH);
    // Test the getId method
    assertEquals(id, task.getId(), "ID should be 'id'");
  }

  @Test
  public void testGetPriority() {
    // Initialize a Task object with sample data
    Task task = new Task("Sample Title", "Sample Description", id, Priority.HIGH);
    // Test the getPriority method
    assertEquals(Priority.HIGH, task.getPriority(), "Priority should be 'Priority.HIGH'");
  }

  @Test
  public void testSetPriority() {
    // Initialize a Task object with sample data
    Task task = new Task("Sample Title", "Sample Description", id, Priority.HIGH);
    // Test the setPriority method by updating the priority
    task.setPriority(Priority.MEDIUM);
    assertEquals(Priority.MEDIUM, task.getPriority(), "Priority should be updated to 'MEDIUM'");
  }

  @Test
  public void testFindTaskById_TaskNotFound() {
    List<Task> tasks = new ArrayList<>();
    tasks.add(new Task("Task 1", "Description for Task 1", id, Priority.HIGH));
    tasks.add(new Task("Task 2", "Description for Task 2", id, Priority.MEDIUM));
    tasks.add(new Task("Task 3", "Description for Task 3", id, Priority.LOW));

    assertThrows(
        TaskNotFoundException.class,
        () -> {
          Task.findTaskById(tasks, "4");
        },
        "Task with ID 4 should not be found and an exception should be thrown.");
  }
}
