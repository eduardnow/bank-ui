export class Holder {
    id: number = 0;
    cuit: string;
    naturalPerson: boolean;
    document: string;
    firstName: string;
    lastName: string;
    businessName: string;
    foundationYear: string;

    constructor(holder: any = {}) {
        this.id = holder.id;
        this.cuit = holder.cuit;
        this.naturalPerson = holder['natural-person'];

        if (this.naturalPerson) {
            this.document = holder.document || '';
            this.firstName = holder['first-name'] || '';
            this.lastName = holder['last-name'] || '';
        } else {
            this.businessName = holder['business-name'] || '';
            this.foundationYear = holder['foundation-year'] || '';
        }
    }
}
