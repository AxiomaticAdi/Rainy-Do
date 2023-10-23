"use client";

import Image from "next/image";

export default function InfoButton() {
    return (
        <div>
            <button
                className="btn btn-circle btn-ghost h-12 w-12"
                onClick={() => {
                    const modal = document.getElementById(
                        "info_modal",
                    ) as HTMLDialogElement;
                    modal.showModal();
                }}
            >
                <Image
                    src="information-circle.svg"
                    alt="website info"
                    width="25"
                    height="25"
                />
            </button>
            <dialog id="info_modal" className="modal">
                <div className="modal-box flex flex-col gap-4">
                    <h3 className="text-center text-lg font-bold">
                        Rainy-Do User Guide
                    </h3>
                    <div>
                        <h4 className="font-bold underline">
                            Track Your To-Do List
                        </h4>
                        Press the{" "}
                        <span className="font-semibold">clipboard button</span>{" "}
                        to reveal or hide your to-do list. Press the plus button
                        to add additional tasks to your list, or use the
                        checkbox to mark completed tasks. Clear completed tasks
                        with the button at the bottom of the list.
                    </div>

                    <div>
                        <h4 className="font-bold underline">
                            Block out distracting sounds
                        </h4>
                        Press the{" "}
                        <span className="font-semibold">play button</span> to
                        start or stop our focus-enhancing rain sounds. Hover
                        over to reveal controls that allow you to adjust volume.
                        For extra effect, try combining these sounds with your
                        favorite lo-fi study mixes!
                    </div>

                    <div>
                        <h4 className="font-bold underline">
                            Pick photo or video background
                        </h4>
                        Press the{" "}
                        <span className="font-semibold">
                            camera swap button
                        </span>{" "}
                        to switch between our aesthetic page backgrounds - a
                        calming nature video loop or a simple static image.
                    </div>

                    <div>
                        <h4 className="font-bold underline">Credits</h4>
                    </div>

                    <div className="font-bold">
                        Press ESC key or click outside to close
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}
