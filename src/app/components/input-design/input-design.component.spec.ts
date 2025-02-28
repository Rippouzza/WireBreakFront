import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InputDesignComponent } from "./input-design.component";

describe("InputDesignComponent", () => {
  let component: InputDesignComponent;
  let fixture: ComponentFixture<InputDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDesignComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should handle file drop", () => {
    const mockEvent = new DragEvent("drop");
    spyOn(console, "log");
    component.onDrop(mockEvent);
    expect(console.log).toHaveBeenCalled();
  });

  it("should prevent default on dragover", () => {
    const mockEvent = new DragEvent("dragover");
    spyOn(mockEvent, "preventDefault");
    component.onDragOver(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
