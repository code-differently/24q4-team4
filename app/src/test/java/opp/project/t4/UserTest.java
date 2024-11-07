package opp.project.t4;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.UUID;

import org.junit.jupiter.api.BeforeEach;

class UserTest {
    /*
     *  I want to assign tasks to users
     *  Represent a user, with basic information (e.g., name, ID).
     */

    User user;
    User user1;
    User user2;

    @BeforeEach
    void setUp() {
        UUID id = UUID.randomUUID();

        ArrayList<Task> taskList = new ArrayList<>();
        taskList.add(new Task("Complete lesson_17"));
        taskList.add(new Task("Update Resume"));

        ArrayList<Task> taskList1 = new ArrayList<>();
        taskList.add(new Task("Complete lesson_16"));
        taskList.add(new Task("Create Resume"));

        user = new User(id, "Chigazo Graham", taskList);
        user1 = new User(id, "Chigazo Graham", taskList1);  // Same ID as user1
        user2 = new User(UUID.randomUUID(), "John Doe", taskList);
    }

    @Test
    public void testGetId() {
        //Act
        UUID actualId = user.getId();
        //Arrange
        UUID expectedId = UUID.randomUUID();
        //Assert
        assertEquals(expectedId, actualId);
    }

    @Test
    public void testGetName() {
        //Act
        String actualName = user.getName();
        //Arrange
        String expectedName = "Chigazo Graham";
        //Assert
        assertEquals(expectedName, actualName);
    }

    @Test
    public void testSetName() {
        //Act
        user.setName("Austin Graham");
        //Arrange
        String expectedName = "Austin Graham";
        //Assert
        assertEquals(expectedName, user.getName());
    }


    @Test
    public void testGetTaskList() {
        //Act
        ArrayList<Task> actualTaskList = user.getTaskList();
        //Arrange
        ArrayList<Task> expectedTaskList = new ArrayList<Task>("Complete lesson_17", "Update Resume");
        //Assert
        assertEquals(expectedTaskList, actualTaskList);
    }

    @Test
    public void testEquals() {
        // Arrange
        User expectedEqualUser = user;

        // Act & Assert
        assertTrue(user.equals(user1));  // Same ID, should be equal
        assertFalse(user.equals(user2)); // Different ID, should not be equal
        assertFalse(user.equals(expectedEqualUser)); // Comparing user1 to itself, which should return false
    }

    @Test
    public void testHashCode() {
        // Assert
        assertEquals(user.hashCode(), user1.hashCode());  // Same ID, same hash code
        assertNotEquals(user.hashCode(), user2.hashCode()); // Different IDs should return different hash codes
    }

    @Test
    public void testToString() {
        // Arrange
        String expectedString = "User{id=" + user.getId() + ", name='Chigazo Graham', taskList=" + user.getTaskList() + "}";

        // Act
        String userString = user.toString();

        // Assert
        assertEquals(expectedString, userString);
    }
}
