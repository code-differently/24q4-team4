package opp.project.t4;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class TaskTest {
  @Test
  public void testGetTitle() {
    // Initialize a Task object with sample data
    Task task = new Task("Sample Title", "Sample Description", "123", "High");
    // Test the getTitle method
    assertEquals("Sample Title", task.getTitle(), "Title should be 'Sample Title'");
  }

  @Test
  public void testGetDescription() {
    // Initialize a Task object with sample data
    Task task = new Task("Sample Title", "Sample Description", "123", "High");
    // Test the getDescription method
    assertEquals(
        "Sample Description", task.getDescription(), "Description should be 'Sample Description'");
  }

  @Test
  public void testGetId() {
    // Initialize a Task object with sample data
    Task task = new Task("Sample Title", "Sample Description", "123", "High");
    // Test the getId method
    assertEquals("123", task.getId(), "ID should be '123'");
  }

  @Test
  public void testGetPriority() {
    // Initialize a Task object with sample data
    Task task = new Task("Sample Title", "Sample Description", "123", "High");
    // Test the getPriority method
    assertEquals("High", task.getPriority(), "Priority should be 'High'");
  }

  @Test
  public void testSetPriority() {
    // Initialize a Task object with sample data
    Task task = new Task("Sample Title", "Sample Description", "123", "High");
    // Test the setPriority method by updating the priority
    task.setPriority("Medium");
    assertEquals("Medium", task.getPriority(), "Priority should be updated to 'Medium'");
  }
}
