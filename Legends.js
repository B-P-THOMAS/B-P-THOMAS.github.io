// Class to display the note names next to the nodes on the Bezel
//
class Legends {
    constructor(ctx, radius, direction) {
        this.degree = 0;
        this.spokelength = radius;
        this.use_sharps = [true, true, false, true, false, true, true, false, true, false, true, true];
        this.legends_sharps = ["C", "B", "A♯", "A", "G♯", "G", "F♯", "F", "E", "D♯", "D", "C♯"];
        this.legends_flats = ["C", "B", "B♭", "A", "A♭", "G", "G♭", "F", "E", "E♭", "D", "D♭"];
        this.direction = direction;
    }

    render(ctx) {

        let legends;

        if (this.use_sharps[this.degree]) {
            legends = this.legends_sharps;
        } else {
            legends = this.legends_flats;
        }

        let width = ctx.canvas.width;
        let height = ctx.canvas.height;

        ctx.save();

        ctx.font = "24px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let idx = 0; idx < 12; ++idx) {
            let angle = (idx * Math.PI / 6) + (3 * Math.PI / 2);
            let x = ((width / 2) - Math.cos(angle) * (this.spokelength + 30));
            let y = ((height / 2) + Math.sin(angle) * (this.spokelength + 30));
            ctx.fillText(legends[idx], x, y);
            // ctx.beginPath();
            // ctx.arc(x, y, 4, 0, Math.PI * 2, true);
            // ctx.fill();
        }

        ctx.restore();
    }

    update(time, direction) {
        this.direction = direction;
    }

    advanceScene() {
        this.degree -= (this.direction * 5);
        this.degree += 12;
        this.degree %= 12;
    }
}